import ContentDisplay from "@/app/components/ContentDisplay";

const page = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default page;
