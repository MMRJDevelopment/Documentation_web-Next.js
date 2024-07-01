import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");
export default function getDocuments() {
  console.log(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", " ");
    const fullpath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullpath, "utf8");
    const matterResult = matter(fileContents);
    console.log(matterResult);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
  });
}

export async function getDocumentsContent(id) {
  const fullpath = path.join(postsDirectory, `${id}.md`);
  const fulContent = fs.readFileSync(fullpath, "utf8");
  const matterResult = matter(fulContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
