import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";
const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentsContent(id);
  console.log(documentContent);
  return (
    <article class="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <samp>Published On:{documentContent.date}</samp> by{" "}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;
