export interface BlockProps {
    type: string;
    content: any;
};

export interface ColumnProps {
    width: string;
    blocks: BlockProps[];
    id: string;
};

export type ContentPosition = 'center|center' | 'bottom|left';