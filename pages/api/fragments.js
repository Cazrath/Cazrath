import { prisma } from '../../lib/db'

export default async function handler(req, res) {
  const fragments = await prisma.fragment.findMany()
  res.status(200).json(fragments)
}
