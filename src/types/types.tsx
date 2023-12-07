export type Item = {
  id: number;
  title: string;
  createdat: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  referencelink: string | null;
  parent_note: number | null;
  authorid: number;
  pinned: boolean;
};
export type NewItem = {
  title: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  parentNote: number | null;
  authorid: number;
  referencelink: string | null;
  parent_note: number | null;
};
export type UpdatedItem = {
  id: number;
  title: string;
  description: string | null;
  attachment: string | null;
  attachmentalt: string | null;
  referencelink: string | null;
};
