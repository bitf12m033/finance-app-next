CREATE POLICY "Authenticated users can see avatars 1oj01fe_0" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'avatars');
