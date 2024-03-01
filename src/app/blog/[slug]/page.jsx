import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

const SinglePostPage = async ({ params }) => {

  const { slug } = params

  const post = await getPost(slug)

  console.log(post)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="/noavatar.png" alt="avatar" width={50} height={50} className={styles.avatar} />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage