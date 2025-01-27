import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const dynamicParams = false;

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), 'blogs');
    const files = fs.readdirSync(dir);

    return files.map((file) => ({
        slug: file.replace(/\.md$/, '')
    }));
}


export default async function BlogPage({ params }: any) {
    const { slug } = params;
    const dir = path.join(process.cwd(), 'blogs');
    const filePath = path.join(dir, `${slug}.md`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return (
            <div className='wrapper'>
                <Link href="/blogs" className='flex items-center gap-2 w-full bg-[#000] text-white p-4 rounded-md'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to blogs</Link>
                <h1 className='text-3xl mt-10 font-black'>{data.title}</h1>
                <div className='prose mt-10 mb-8'>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <Link href="/blogs" className='flex items-center gap-2 w-full bg-[#000] text-white p-4 rounded-md'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to blogs</Link>
            </div>
        );
    } catch (error) {
        console.error(error);
        notFound();
    }
}