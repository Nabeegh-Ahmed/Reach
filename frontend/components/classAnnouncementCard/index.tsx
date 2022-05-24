
import { ClassAnnouncementCardProps } from "./types"

const ClassAnnouncementCard: React.FC<ClassAnnouncementCardProps> = ({ teacherAvatar, teacherName, date, announcement }) => {
    return (
      <div className="rounded-xl shadow-xl p-5">
        <div className="flex flex-row">
          <img src={teacherAvatar} className="w-10 h-10 rounded-full mr-3" />
          <div className="flex flex-col">
            <div className="font-bold text-xl">{teacherName}</div>
            <div className="text-sm">{date}</div>
          </div>
        </div>
        <hr className="my-4"/>
        <div>
          <p>{announcement}</p>
        </div>
      </div>
    )
}

ClassAnnouncementCard.defaultProps = {
    teacherAvatar: '',
    teacherName: '',
    date: '',
    announcement: ''
}

export default ClassAnnouncementCard