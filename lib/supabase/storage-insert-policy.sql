CREATE POLICY "Authenticated users can upload an avatar 1oj01fe_0" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'avatars');
