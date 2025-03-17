import { useNotificationStore } from "../store/notificationSlice";

export default function Notification() {
    const notifications = useNotificationStore((state) => state.notifications);

    if(notifications.length === 0) return null;

    return(
        <div className="fixed top-5 right-5 space-y-2 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-3 rounded text-white ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
    );
}
