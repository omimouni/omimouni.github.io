import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'Works | Oumar Mimouni | Full Stack Software Engineer',
  description: 'full stack software engineer',
  openGraph: {
    title: 'Works | Oumar Mimouni | Full Stack Software Engineer',
    description: 'full stack software engineer',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
}

export default function Works() {
  const dir = path.join(process.cwd(), 'works');
  const files = fs.readdirSync(dir);

  const works = files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data;
  });

  return <div className="wrapper">
    <h1 className="text-3xl font-black">Works</h1>

    <div className="mt-10 space-y-8">
      {
        works.map((work) => (
          <div className='bg-gray-50 overflow-hidden rounded-md' key={work.slug}>
            <Link href={`/works/${work.slug}`} className='block'>
              <video src={work.thumbnail} className="aspect-video h-auto w-full" autoPlay loop muted playsInline />
            </Link>
            <div className='p-6'>
              <Link href={`/works/${work.slug}`}>
                <h2 className='text-2xl font-bold'>{work.title}</h2>
                <p className='text-gray-600 mt-3'>{work.description}</p>
                <div className='flex flex-wrap mt-4 gap-2'>
                  {
                    work.tags.map((tag) => (
                      <span className='py-1 px-3 text-xs bg-gray-100 rounded-full' key={tag}>{tag}</span>
                    ))
                  }
                </div>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
}