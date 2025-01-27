import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';


export const metadata = {
    title: 'Blogs | Oumar Mimouni | Full Stack Software Engineer',
    description: 'full stack software engineer',
    openGraph: {
        title: 'Blogs | Oumar Mimouni | Full Stack Software Engineer',
        description: 'full stack software engineer',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
}

export default function Blogs() {
    const dir = path.join(process.cwd(), 'blogs');
    const files = fs.readdirSync(dir);

    const blogs = files.map((file) => {
        const filePath = path.join(dir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        return {
            slug: data.slug,
            title: data.title,
            content: content
        };
    });

    return <>
        <div className="wrapper">
            <h1 className="text-3xl font-black">Blogs</h1>

            {blogs.map((blog) => (
                <div key={blog.slug} className='bg-gray-50 p-4 rounded-md mt-10'>
                    <Link href={`/blogs/${blog.slug}`} legacyBehavior={false}>
                        <h2 className='text-xl font-semibold'>{blog.title}</h2>
                        <p className='text-xs mt-2'>{String(blog.content).replace(/<[^>]*>/g, '').substring(0, 200)}...</p>
                    </Link>
                </div>
            ))}
        </div>
    </>;
}

