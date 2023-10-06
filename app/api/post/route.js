import prisma from '@/helpers/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: 'Something went wrong while trying to load the posts',
        result: e,
      },
      { status: 200 },
    );
  }
}
