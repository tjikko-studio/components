export interface BlockProps {
    type: string;
    content: any;
};

export interface ColumnProps {
    width: string;
    blocks: BlockProps[];
};

export type ContentPosition = 'center|center' | 'bottom|left';