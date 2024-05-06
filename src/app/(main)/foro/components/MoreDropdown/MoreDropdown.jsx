'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './MoreDropdown.module.css'
import { useState, useContext } from "react";

import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { deletePost, editPost } from "@/services/api/api.post.service";
import { UserContext } from "@/components/context/userContext";
import { useRouter } from "next/navigation";
import { successMessage, errorMessage, infoMessage } from '@/utils/notify'
import ModalPortal from "../ModalPortal/ModalPortal";

function MoreDropdown({data}) {
    const [isModalOpen, setIsModalOpen] = useState(false) // modal delete

    const [modalEdit, setIsModalEdit] = useState(false) // modal edit

    const router = useRouter()
    const { user, deleteUser, updateToken } = useContext(UserContext)
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openEditModal = () => setIsModalEdit(true);
    const closeEditModal = () => setIsModalEdit(false);
    
    const handleDeletePost = async ()=>{
        await deletePost(user.token, data.id)
        .then(response => {
            switch (response.status) {
                case 204:
                    successMessage('El comentario ha sido eliminado.')
                    router.refresh()
                    break;
                case 400:
                    errorMessage('Hubo un error al eliminar tu comentario, intente más tarde.')
                    deleteUser()
                    router.push('/auth/login')
                    break;
                case 401:
                    updateToken().then((res)=>{
                        if (res) {
                            infoMessage('No se pudo eliminar tu comentaio, intente nuevamente.')
                        } else {
                            router.push('/auth/login')
                        }
                    })
                    break;
                case 404:
                    errorMessage('No se pudo encontrar el comentario, Probablemente haya sido eliminado.')
                    break;
                default:
                    throw new Error('Unhandled status code');
            }
        })
        .catch(err => {
            errorMessage('Hubo un problema al eliminar.')
        })



        .then((response)=>{
            if(response.ok){
                successMessage('El comentario ha sido eliminado')
            }else{
                errorMessage('Hubo un problema al eliminar!')
            }
        })
        router.refresh()
    }
    
    const editMessage = async (newText)=>{
        await editPost(user.token, newText, data.id)
        .then(response => {
            switch (response.status) {
                case 200:
                    successMessage('El comentario ha sido editado correctamente.')
                    router.refresh()
                    break;
                case 400:
                    errorMessage('Hubo un error al editar tu comentario, intente más tarde.')
                    deleteUser()
                    router.push('/auth/login')
                    break;
                case 401:
                    updateToken().then((res)=>{
                        if (res) {
                            infoMessage('No se pudo editar tu comentaio, intente nuevamente.')
                        } else {
                            router.push('/auth/login')
                        }
                    })
                    break;
                case 404:
                    errorMessage('No se pudo encontrar el comentario, Probablemente haya sido eliminado.')
                    break;
                default:
                    throw new Error('Unhandled status code');
            }
        })
        .catch(err => {
            errorMessage('Hubo un problema al editar.')
        })
    }
    const disableDropDown=()=>{
        return data.userId!==user.data.id
    }

    return (
        <>
            <Dropdown isDisabled={disableDropDown()}>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className={styles.moreBtn}
                        />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className={styles.menu} id="dropdown_menu_ul">
                    <DropdownItem key="edit" className={styles.dropOption} onClick={openEditModal} >
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
