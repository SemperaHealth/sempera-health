import Image from "next/image";
import Link from "next/link";
import { articles, links } from "@/lib/site";
import { ArrowRight } from "../icons";
import { ButtonLink, Container, Eyebrow } from "../ui";

type Article = (typeof articles)[number];

export function KnowledgeHub() {
  const [featured, ...rest] = articles;

  return (
    <section id="knowledge-hub" aria-labelledby="hub-title" className="bg-teal-wash py-20 md:py-28">
      <Container>
        {/* Darker teal: the standard teal-600 is only 4.15:1 on this tinted background. */}
        <Eyebrow className="text-teal-700!">Knowledge Hub</Eyebrow>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 id="hub-title" className="text-4xl leading-tight md:text-5xl">
            Curious about something? Start here.
          </h2>
          <ButtonLink href={links.getStarted} arrow className="self-start md:self-auto">
            Get Started
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[1fr_0.85fr] lg:gap-20 xl:grid-cols-[1fr_1fr] xl:gap-16">
          <FeaturedArticle article={featured} />
          {/* On wide screens the three articles spread to match the featured article's full height. */}
          <ul className="flex flex-col gap-10 lg:gap-12 xl:h-full xl:justify-between xl:gap-8">
            {rest.map((a) => (
              <li key={a.title}>
                <ArticleRow article={a} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Meta({ article }: { article: Article }) {
  return (
    <p className="text-sm md:text-base">
      <span className="font-medium uppercase tracking-[0.04em] text-teal-700">{article.category}</span>
      <span aria-hidden className="mx-2.5 text-slate">·</span>
      <span className="whitespace-nowrap text-slate">{article.readTime}</span>
    </p>
  );
}

/** Whole card is one link (stretched); the photo zooms slightly on hover. */
function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[10/9] overflow-hidden rounded-2xl">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1280px) 580px, (min-width: 1024px) 620px, 100vw"
          quality={90}
          className="object-cover transition-[scale] duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="mt-6">
        <Meta article={article} />
        <h3 className="mt-3 text-2xl leading-snug md:text-3xl">{article.title}</h3>
        {"excerpt" in article && <p className="mt-4 text-lg leading-relaxed md:text-xl">{article.excerpt}</p>}
        <ReadMore href={article.href} title={article.title} />
      </div>
    </article>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="group relative grid items-start gap-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:items-center">
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl xl:aspect-[5/4]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1280px) 340px, (min-width: 1024px) 220px, (min-width: 640px) 40vw, 100vw"
          quality={90}
          className="object-cover transition-[scale] duration-500 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
        />
      </div>
      <div>
        <Meta article={article} />
        <h3 className="mt-3 text-2xl leading-snug">{article.title}</h3>
        <ReadMore href={article.href} title={article.title} />
      </div>
    </article>
  );
}

function ReadMore({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-1.5 font-medium text-teal-700 underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline"
    >
      Read more<span className="sr-only">: {title}</span>
      <ArrowRight className="size-[1.05em] transition-[translate] duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
