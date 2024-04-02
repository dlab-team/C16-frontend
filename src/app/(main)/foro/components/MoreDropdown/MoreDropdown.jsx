'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from './MoreDropdown.module.css'
function MoreDropdown() {
    return (
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
                <DropdownItem key="delete" className={styles.dropOption}>
                    <div className={styles.closeIcon}></div>
                    <span className={styles.optionText}>Eliminar comentario</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default MoreDropdown
