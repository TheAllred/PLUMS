-- AlterTable
CREATE SEQUENCE note_sortorder_seq;
ALTER TABLE "Note" ALTER COLUMN "indent" SET DEFAULT 0,
ALTER COLUMN "sortOrder" SET DEFAULT nextval('note_sortorder_seq');
ALTER SEQUENCE note_sortorder_seq OWNED BY "Note"."sortOrder";
