import { DocumentValidationIcon, JobLinkIcon, MessageUser01Icon, TaskDaily01Icon } from "hugeicons-react";

export const ServicesCardData = [
    {
        title: "مدرک معتبر",
        description:
            "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید",
        image: <DocumentValidationIcon size={40} />,
        iconColor: "#3772FF",
    },
    {
        title: "آزمون ها",
        description:
            "با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید",
        image: <TaskDaily01Icon size={40} />,
        iconColor: "#EC4D4A",
    },
    {
        title: "مشاوره 24 ساعته",
        description:
            "مشاورین ما 24 ساعته جوابگو سوال های شما هستند",
        image: <MessageUser01Icon size={40} />,
        iconColor: "#ECAC4A",
    },
    {
        title: "فرصت‌های شغلی",
        description:
            "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه",
        image: <JobLinkIcon size={40} />,
        iconColor: "#EC4AC9",
    },
];