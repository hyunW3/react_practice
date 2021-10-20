// ../components/WriteContent.js에서 활용합니다.

const PostContent = async (title, content) => {
  const databody = {
    title,
    content,
    thumbs: 0,
  };
  await fetch("/contents", {
    method: "POST",
    body: JSON.stringify(databody),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default PostContent;
