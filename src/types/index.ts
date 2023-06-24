export type Question = {
    tags: string[];
    is_answered: boolean;
    view_count: number;
    up_vote_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    question_id: number;
    body_markdown: string;
    link: string;
    title: string;
};

export type Answer = {
    is_accepted: boolean;
    score: number;
    creation_date: number;
    answer_id: number;
    question_id: number;
    body_markdown: string;
};