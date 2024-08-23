import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     responses:
 *       200:
 *         description: A user logged in
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
 *                   name:
 *                     type: string
 *                     example: saksham
 *                   email:
 *                     type: string
 *                     example: saksham.com
 *       404:
 *         description: A user not logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: invalid credentials
 *
 *
 */

export function POST({ req: NextRequest, res: NextResponse }) {
  const user = [{ id: 1, name: "saksham", email: "saksham.com" }];
  res.json({ user }, { status: 200 });
}
