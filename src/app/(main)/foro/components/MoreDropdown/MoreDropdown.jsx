'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './MoreDropdown.module.css'
import { useState, useContext } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { deletePost, editPost } from "@/services/api/api.post.service";
import { UserContext } from "@/components/context/userContext";
import { useRouter } from "next/navigation";

function MoreDropdown({data}) {
    const [isModalOpen, setIsModalOpen] = useState(false) // modal delete

    const [modalEdit, setIsModalEdit] = useState(false) // modal edit

    const router = useRouter()
    const { user } = useContext(UserContext)
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openEditModal = () => setIsModalEdit(true);
    const closeEditModal = () => setIsModalEdit(false);
    
    const handleDeletePost = async ()=>{
        await deletePost(user.token, data.id)

        alert(`el comentario ${data.id} ha sido eliminado`)
        router.refresh()
    }
    
    const editMessage = async (newText)=>{
        await editPost(user.token, newText, data.id)
        alert(`el comentario ${data.id} ha sido editado`)
        router.refresh()
    }

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className={styles.moreBtn}
                        />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className={styles.menu} id="dropdown_menu_ul">
                    <DropdownItem key="edit" className={styles.dropOption} onClick={openEditModal}>
                        <div className={styles.penIcon}></div>
                        <span className={styles.optionText}>Editar comentario</span>
                    </DropdownItem>
                    <DropdownItem key="delete" className={styles.dropOption} onClick={openModal}>
                        <div className={styles.closeIcon}></div>
                        <span className={styles.optionText}>Eliminar comentario</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            

            <ModalPortal>
                <DeleteModal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDeletePost}/>
            </ModalPortal>

            <ModalPortal>
                <EditModal isOpen={modalEdit} onClose={closeEditModal} onConfirm={editMessage} userImage={data.user.photo} message={data.content}/>
            </ModalPortal>
        </>
    )
}

export default MoreDropdown
