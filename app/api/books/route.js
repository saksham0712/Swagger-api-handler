import { NextResponse, NextRequest } from "next/server";

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve All Books
 *     responses:
 *       200:
 *         description: A list of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "The Great Gatsby"
 *                   author:
 *                     type: string
 *                     example: "F. Scott Fitzgerald"
 *   post:
 *     summary: Retrieve a list of books by author name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *                 description: book by author
 *                 example: "any name"
 *     responses:
 *       200:
 *         description: A list of books by author
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: The Great Gatsby
 *                   author:
 *                     type: string
 *                     example: F. Scott Fitzgerald
 *       401:
 *         description: Not valid author
 *
 * 
 *
 */

export async function GET() {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 5, title: "Moby-Dick", author: "Herman Melville" },
    { id: 6, title: "War and Peace", author: "Leo Tolstoy" },
    { id: 7, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { id: 8, title: "Brave New World", author: "Aldous Huxley" },
    { id: 9, title: "The Odyssey", author: "Homer" },
    { id: 10, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 11, title: "Jane Eyre", author: "Charlotte Brontë" },
    { id: 12, title: "The Divine Comedy", author: "Dante Alighieri" },
    { id: 13, title: "Wuthering Heights", author: "Emily Brontë" },
    { id: 14, title: "The Iliad", author: "Homer" },
    { id: 15, title: "Great Expectations", author: "Charles Dickens" },
  ];
  return NextResponse.json(books, { status: 200 });
}
export async function POST(request) {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 5, title: "Moby-Dick", author: "Herman Melville" },
    { id: 6, title: "War and Peace", author: "Leo Tolstoy" },
    { id: 7, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { id: 8, title: "Brave New World", author: "Aldous Huxley" },
    { id: 9, title: "The Odyssey", author: "Homer" },
    { id: 10, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 11, title: "Jane Eyre", author: "Charlotte Brontë" },
    { id: 12, title: "The Divine Comedy", author: "Dante Alighieri" },
    { id: 13, title: "Wuthering Heights", author: "Emily Brontë" },
    { id: 14, title: "The Iliad", author: "Homer" },
    { id: 15, title: "Great Expectations", author: "Charles Dickens" },
  ];


  const { author } = await request.json();
  // return NextResponse.json({name})
  if (author) {
    const booking = books.filter((book) => book.author === author);
    const book1 = booking[0];
    if (book1) return NextResponse.json({ book1 }, { status: 200 });
    return NextResponse.json({ message: "Not valid author" }, { status: 401 });
  }
}
