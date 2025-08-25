import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Contact } from '@/lib/models/contact';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Create new contact document
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send email notification (optional - don't fail if email fails)
    try {
      await sendEmail({ name, email, message });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.warn('Email sending failed, but contact was saved:', emailError);
    }

    console.log('Saved contact form submission:', contact);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('MONGODB_URI')) {
        return NextResponse.json(
          { message: 'Database configuration error' },
          { status: 500 }
        );
      }
      if (error.message.includes('validation')) {
        return NextResponse.json(
          { message: 'Invalid data provided' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
