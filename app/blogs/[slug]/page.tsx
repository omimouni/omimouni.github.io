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
            <div className='wrapper py-8 md:py-12'>
                <Link href="/blogs" className='inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm'>
                    <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Back to blogs
                </Link>
                <article className="mt-8 md:mt-12">
                    <header className="space-y-2">
                        <h1 className='text-3xl md:text-4xl font-black leading-tight tracking-tight'>{data.title}</h1>
                        {data.date && (
                            <time className="block text-gray-500 text-sm md:text-base">
                                {new Date(data.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        )}
                    </header>
                    <div className='prose prose-base md:prose-lg max-w-none mt-8 md:mt-10 
                        prose-headings:font-bold prose-headings:tracking-tight
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-lg prose-img:shadow-md
                        prose-p:leading-relaxed
                        prose-code:text-sm prose-code:bg-gray-50 prose-code:px-1 prose-code:rounded
                        prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:italic
                        prose-ul:list-disc prose-ol:list-decimal'>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </article>
                <div className="mt-12 md:mt-16 border-t border-gray-100 pt-6 md:pt-8">
                    <Link href="/blogs" className='inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm'>
                        <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        Back to blogs
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        notFound();
    }
}

export async function generateMetadata({ params }:  any) {
    const { slug } = params;
    const dir = path.join(process.cwd(), 'blogs');
    const filePath = path.join(dir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
        title: data.title + ' | Oumar Mimouni | Full Stack Software Engineer',
        description: data.description,
    }
}