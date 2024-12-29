Đây là 1 dự án web thanh nhạc. Cấu trúc database:
CREATE TABLE public."Course" (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  price text NOT NULL,
  image text NOT NULL,
  "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
  type text NULL,
  CONSTRAINT Course_pkey PRIMARY KEY (id),
  CONSTRAINT Course_type_key UNIQUE (type),
  CONSTRAINT course_id_unique UNIQUE (id)
);

CREATE TABLE public."Instructor" (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text NOT NULL,
  bio text NOT NULL,
  image text NOT NULL,
  achievements text[] NOT NULL,
  "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT Instructor_pkey PRIMARY KEY (id)
);

CREATE TABLE public."Testimonial" (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text NOT NULL,
  content text NOT NULL,
  avatar text NOT NULL,
  "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT Testimonial_pkey PRIMARY KEY (id)
);

CREATE TABLE public.comment_likes (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  comment_id uuid NULL,
  user_id uuid NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT comment_likes_pkey PRIMARY KEY (id),
  CONSTRAINT comment_likes_comment_id_user_id_key UNIQUE (comment_id, user_id),
  CONSTRAINT comment_likes_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES lesson_comments(id) ON DELETE CASCADE,
  CONSTRAINT comment_likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS comment_likes_user_id_idx ON public.comment_likes USING btree (user_id);
CREATE INDEX IF NOT EXISTS comment_likes_comment_id_idx ON public.comment_likes USING btree (comment_id);

CREATE TABLE public.enrollments (
  id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
  user_id uuid NULL,
  course_id bigint NULL,
  status text NULL DEFAULT 'pending'::text,
  payment_status text NULL DEFAULT 'unpaid'::text,
  payment_amount numeric(10,2) NULL,
  "createdAt" timestamp with time zone NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NULL DEFAULT now(),
  CONSTRAINT enrollments_pkey PRIMARY KEY (id),
  CONSTRAINT enrollments_user_id_course_id_key UNIQUE (user_id, course_id),
  CONSTRAINT enrollments_course_id_fkey FOREIGN KEY (course_id) REFERENCES "Course"(id) ON DELETE CASCADE,
  CONSTRAINT enrollments_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE public.lesson_comments (
  id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
  user_id uuid NOT NULL,
  course_type text NOT NULL,
  lesson_id bigint NOT NULL,
  content text NOT NULL,
  parent_id uuid NULL,
  likes integer NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT lesson_comments_pkey PRIMARY KEY (id),
  CONSTRAINT lesson_comments_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES lesson_comments(id) ON DELETE CASCADE,
  CONSTRAINT lesson_comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  CONSTRAINT lesson_comments_course_type_check CHECK ((course_type = ANY (ARRAY['basic'::text, 'intermediate'::text])))
);
CREATE INDEX IF NOT EXISTS idx_lesson_comments_course_lesson ON public.lesson_comments USING btree (course_type, lesson_id);
CREATE INDEX IF NOT EXISTS idx_lesson_comments_user ON public.lesson_comments USING btree (user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_comments_parent ON public.lesson_comments USING btree (parent_id);

CREATE TABLE public.profiles (
  id uuid NOT NULL,
  name text NULL,
  avatar_url text NULL,
  phone text NULL,
  "createdAt" timestamp with time zone NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NULL DEFAULT now(),
  email text NULL,
  role text NOT NULL DEFAULT 'user'::text,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE public.purchases (
  id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
  user_id uuid NOT NULL,
  course_type text NOT NULL,
  order_code text NOT NULL,
  amount integer NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('Asia/Ho_Chi_Minh'::text, now()),
  payment_status text NOT NULL DEFAULT 'completed'::text,
  CONSTRAINT purchases_pkey PRIMARY KEY (id),
  CONSTRAINT purchases_user_id_course_type_key UNIQUE (user_id, course_type),
  CONSTRAINT purchases_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  CONSTRAINT purchases_course_type_check CHECK ((course_type = ANY (ARRAY['basic'::text, 'intermediate'::text]))),
  CONSTRAINT purchases_payment_status_check CHECK ((payment_status = ANY (ARRAY['completed'::text, 'refunded'::text, 'cancelled'::text])))
);
CREATE INDEX IF NOT EXISTS purchases_user_id_idx ON public.purchases USING btree (user_id);
CREATE INDEX IF NOT EXISTS purchases_course_type_idx ON public.purchases USING btree (course_type);

CREATE TABLE public.videos (
  id uuid NOT NULL DEFAULT extensions.uuid_generate_v4(),
  youtube_id text NOT NULL,
  title text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT videos_pkey PRIMARY KEY (id)
);