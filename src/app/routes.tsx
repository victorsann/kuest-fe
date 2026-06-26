import Baselayout from "./layout/base-layout";

import QuestionsPage from "./pages/questions";

import LogInPage from "./pages/login";
import SignInPage from "./pages/signin";
import ExamsPage from "./pages/exams";
import CoursesPage from "./pages/courses";
import SubjectsPage from "./pages/subjects";
import BoardsPage from "./pages/boards";

const routes = () => [
    {
        path: '/',
        element: <Baselayout />,
        children: [
            { index: true, element: <QuestionsPage /> },

            { path: 'courses', element: <CoursesPage /> },
            { path: 'boards', element: <BoardsPage /> },
            { path: 'subjects', element: <SubjectsPage /> },
            { path: 'exams', element: <ExamsPage /> },

            { path: 'login', element: <LogInPage /> },
            { path: 'signin', element: <SignInPage /> },
        ]
    }
];

export default routes;