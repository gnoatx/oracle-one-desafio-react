import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Video } from '../../classes/video'
import styles from './EditModal.module.css'

type EditModalProps = {
    selectedVideo: Video,
    isOpen: boolean,
    close: () => void
}

export default function EditModal({ selectedVideo, isOpen, close }: EditModalProps) {
    return (
        <Dialog open={isOpen} as="div" onClose={close} className={styles.dialog}>
            <DialogPanel className={styles['edit-modal']}>
                <header className={styles.header}>
                    <DialogTitle className={styles.title}>Editar Card</DialogTitle>
                </header>
                <form action='' className={styles.form}>
                    <fieldset className={`${styles.field} ${styles['title-input']}`}>
                        <label htmlFor="title">Título</label>
                        <input required type="text" name="title" id="title" value={selectedVideo.title} placeholder='Digite o título do vídeo' className={styles.input} autoFocus />
                    </fieldset>
                    <fieldset className={`${styles.field} ${styles['category-input']}`}>
                        <label htmlFor="category">Categoria</label>
                        <select required name="category" id="category" className={styles.input}>
                            <option value="0" className={styles.option} selected={selectedVideo.category === 0 ? true : false}>Front End</option>
                            <option value="1" className={styles.option} selected={selectedVideo.category === 1 ? true : false}>Back End</option>
                            <option value="2" className={styles.option} selected={selectedVideo.category === 2 ? true : false}>Mobile</option>
                        </select>
                    </fieldset>
                    <fieldset className={`${styles.field} ${styles['imagePath-input']}`}>
                        <label htmlFor="imagePath">Capa</label>
                        <input required type="url" name="imagePath" id="imagePath" value={selectedVideo.imagePath} placeholder='Digite ou cole o link da imagem de capa' className={styles.input} />
                    </fieldset>
                    <fieldset className={`${styles.field} ${styles['videoUrl-input']}`}>
                        <label htmlFor="videoUrl">Vídeo</label>
                        <input required type="url" name="videoUrl" id="videoUrl" value={selectedVideo.videoUrl} placeholder='https://www.youtube.com/watch?v=a1B2c3D4e5F' className={styles.input} />
                    </fieldset>
                    <fieldset className={`${styles.field} ${styles['description-input']}`}>
                        <label htmlFor="description">Descrição</label>
                        <textarea required name="description" id="description" value={selectedVideo.description} placeholder='Digite uma descrição para o vídeo' className={styles.input} rows={5}></textarea>
                    </fieldset>
                    <fieldset className={styles['button-bar']}>
                        <button className={styles.button}>Salvar</button>
                        <button onClick={close} className={styles.button}>Cancelar</button>
                    </fieldset>
                </form>
            </DialogPanel>
        </Dialog>
    )
}