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
                    <input required type="text" name="title" id="title" placeholder='Digite o título do vídeo' className={styles.input} autoFocus />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['category-input']}`}>
                    <label htmlFor="category">Categoria</label>
                    <select required name="category" id="category" className={styles.input}>
                        <option value="0" className={styles.option}>Front End</option>
                        <option value="1" className={styles.option}>Back End</option>
                        <option value="2" className={styles.option}>Mobile</option>
                    </select>
                </fieldset>
                <fieldset className={`${styles.field} ${styles['imagePath-input']}`}>
                    <label htmlFor="imagePath">Capa</label>
                    <input required type="url" name="imagePath" id="imagePath" placeholder='Digite ou cole o link da imagem de capa' className={styles.input} />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['videoUrl-input']}`}>
                    <label htmlFor="videoUrl">Vídeo</label>
                    <input required type="url" name="videoUrl" id="videoUrl" placeholder='https://www.youtube.com/watch?v=a1B2c3D4e5F' className={styles.input} />
                </fieldset>
                <fieldset className={`${styles.field} ${styles['description-input']}`}>
                    <label htmlFor="description">Descrição</label>
                    <textarea required name="description" id="description" placeholder='Digite uma descrição para o vídeo' className={styles.input} rows={5}></textarea>
                </fieldset>
                <fieldset className={styles['button-bar']}>
                    <button className={styles.button}>Salvar</button>
                    <button className={styles.button}>Limpar</button>
                </fieldset>
            </form>
        </main>
    )
}