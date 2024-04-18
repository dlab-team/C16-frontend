'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './MoreDropdown.module.css'
import { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import DeleteModal from "../DeleteModal/DeleteModal";

function MoreDropdown({data}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const deletePost=()=>{

        alert(`el comentario ${data} ha sido eliminado`)
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
                    <DropdownItem key="edit" className={styles.dropOption}>
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
                <DeleteModal isOpen={isModalOpen} onClose={closeModal} onConfirm={deletePost}/>
            </ModalPortal>
        </>
    )
}

export default MoreDropdown
