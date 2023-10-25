import React from "react";
import MainLayout from "@/components/MainLayout";
import BreadCrumbs from "@/components/BreadCrumbs";
import Image from "next/image";
import { images } from "@/constants";
import Link from "next/link";
import SuggesstedPosts from "./container/SuggesstedPosts";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
    {
        _id: '1',
        image: images.Blogpost,
        title: 'Title 02',
        createdAt: '2023-01-28'
    },
    {
        _id: '2',
        image: images.Blogpost,
        title: 'Title 03',
        createdAt: '2023-01-28'
    },
    {
        _id: '3',
        image: images.Blogpost,
        title: 'Title 04',
        createdAt: '2023-01-28'
    }
];

const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Education",
    "Food",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <Image
            className="rounded-xl w-full"
            src={images.Blogpost}
            alt="post1"
          />
          <Link
            href="/blog?category=selectedCategory"
            className="text-green-500 text-sm inline-block mt-4 md:text-base"
          >
            Education
          </Link>

          <h1 className="text-xl font-medium mt-4 text-black dark:invert md:text-[26px]">
            Title 01
          </h1>
          <div className="mt-4 text-black dark:invert">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
              turpis massa sed elementum. Nisi porta lorem mollis aliquam. Magna
              sit amet purus gravida quis blandit. Faucibus ornare suspendisse
              sed nisi lacus sed viverra. Faucibus nisl tincidunt eget nullam
              non nisi est sit amet. Nibh sed pulvinar proin gravida. Vestibulum
              rhoncus est pellentesque elit. Mi quis hendrerit dolor magna eget
              est lorem ipsum. Nec tincidunt praesent semper feugiat nibh sed
              pulvinar. Nullam eget felis eget nunc lobortis. Dui vivamus arcu
              felis bibendum ut tristique. Tempor commodo ullamcorper a lacus
              vestibulum. Cursus eget nunc scelerisque viverra mauris in aliquam
              sem fringilla. Sagittis purus sit amet volutpat consequat mauris
              nunc. Proin libero nunc consequat interdum varius sit amet mattis.
              Neque gravida in fermentum et sollicitudin ac. Turpis egestas
              integer eget aliquet nibh praesent. Est pellentesque elit
              ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
              Erat pellentesque adipiscing commodo elit at. Vel quam elementum
              pulvinar etiam non. Pellentesque habitant morbi tristique senectus
              et netus. Et odio pellentesque diam volutpat commodo. Vitae semper
              quis lectus nulla at volutpat diam. Consequat mauris nunc congue
              nisi vitae. Velit ut tortor pretium viverra suspendisse potenti
              nullam ac. Porttitor lacus luctus accumsan tortor. Dui id ornare
              arcu odio ut sem nulla pharetra. Montes nascetur ridiculus mus
              mauris vitae. Eget velit aliquet sagittis id consectetur purus ut
              faucibus. Venenatis tellus in metus vulputate eu scelerisque.
              Suspendisse faucibus interdum posuere lorem. Feugiat vivamus at
              augue eget arcu dictum varius duis at.
            </p>
          </div>
        </article>
        <SuggesstedPosts header="Latest Article" posts={postsData} tags={tagsData} className='mt-8 lg:mt-0 lg:max-w-xs'/>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
