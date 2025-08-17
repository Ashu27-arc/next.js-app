import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Contact } from '@/lib/models/contact';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Connect to MongoDB
    await connectToDatabase();

    // Create new contact document
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send email notification
    await sendEmail({ name, email, message });

    console.log('Saved contact form submission and sent email:', contact);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
