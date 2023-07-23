import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import NotFoundPage from "./NotFoundPage.js";
const ArticlePage = () => {
    const params = useParams();
    const { articleId } = params;
    const article = articles.find((article) => article.name === articleId);
    // const {articleId} = useParams();

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <h1> {article?.name} </h1>
            {article?.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    );
};

export default ArticlePage;
