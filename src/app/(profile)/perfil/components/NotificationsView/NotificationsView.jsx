import { PaginationView } from '@/app/(main)/components'
import titleStyles from '../YourDataView/styles/YourDataView.module.css'
import { Notification } from './components'
import styles from './styles/NotificationsView.module.css'

const NotificationsView = ({
  read,
  setRead,
  paginationOptions,
  currentPage,
  handlePageChange,
  getTotalPages,
}) => {
  return (
    <div className={titleStyles.container}>
      <h4 className={titleStyles.title}>Notificaciones</h4>
      <div className={`${read && styles.isPressed} ${styles.wrapper}`}>
        <h6 className={styles.dateView}>Hoy</h6>
        <Notification read={read} setRead={setRead} />
        <Notification read={read} setRead={setRead} />
        <hr className={styles.separator} />
        <PaginationView
          paginationOptions={paginationOptions}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          getTotalPages={getTotalPages}
        />
      </div>
    </div>
  )
}

export default NotificationsView
