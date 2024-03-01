import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/hero.gif" alt="post" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Titulo</h1>
                <p className={styles.desc}>Descrição</p>
                <Link className={styles.link} href="/blog/post">LEIA MAIS</Link>
            </div>
        </div>
    )
}

export default PostCard