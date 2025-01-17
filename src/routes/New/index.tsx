import styles from './New.module.css'

export default function New() {
    return (
        <main className={styles['new-video']}>
            <header className={styles.header}>
                <h1 className={styles.title}>Novo Vídeo</h1>
                <strong className={styles.subtitle}>Complete o formulário para criar um novo card de vídeo.</strong>
            </header>
            <form action='' className={styles.form}>
                <legend className={styles.legend}>Criar Card</legend>
                <fieldset className={`${styles.field} ${styles['title-input']}`}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" className={styles.input} autoFocus />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['category-input']}`}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" id="category" className={styles.input}>
                        <option value="0">Front End</option>
                        <option value="1">Back End</option>
                        <option value="2">Mobile</option>
                    </select>
                </fieldset>
                <fieldset className={`${styles.field} ${styles['imagePath-input']}`}>
                    <label htmlFor="imagePath">Capa</label>
                    <input type="url" name="imagePath" id="imagePath" className={styles.input} />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['videoUrl-input']}`}>
                    <label htmlFor="videoUrl">Vídeo</label>
                    <input type="url" name="videoUrl" id="videoUrl" className={styles.input} />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['description-input']}`}>
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="description" className={styles.input} placeholder='Teste'></textarea>
                </fieldset>

            </form>
        </main>
    )
}