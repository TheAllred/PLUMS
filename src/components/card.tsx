/* eslint-disable @next/next/no-img-element */
import type { Item } from "@/components/detail";
export default function Cards({ items }: { items: Item[] }) {
  return (
    <section
      aria-labelledby="products-heading"
      className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
    >
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item: any) => (
          <a
            key={item.id}
            href={"/note/" + item.id}
            className="group bg-violet rounded-lg hover:bg-violet/75 shadow-xl"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={item.attachment}
                alt={item.attachment_alt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg text-white font-head font-bold text-center capitalize p-1">
              {item.title}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900"></p>
          </a>
        ))}
      </div>
    </section>
  );
}
