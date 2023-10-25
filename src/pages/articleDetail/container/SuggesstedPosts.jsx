import Image from "next/image";
import Link from "next/link";

const SuggesstedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-medium text-black dark:invert md:text-xl">{header}</h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts && posts.map((item) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={item._id}
          >
            <Image
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="posts"
            />
            <div className="text-sm text-black dark:invert font-medium">
              <h3 className="text-sm text-white dark:invert font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-medium text-black mt-8 dark:invert">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index) => (
            <Link href='/' key={index} className="inline-block rounded-md px-3 py-1.5 bg-green-900 text-xs text-white md:text-sm">
                {item}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggesstedPosts;
