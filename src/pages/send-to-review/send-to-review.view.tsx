import { SendToReviewForm } from "@/widgets/send-to-review-form/send-to-review-form.component";
import { FC } from "react";

const SendToReviewView: FC = () => {
  return (
    <>
      <div className="w-full max-w-[560px] min-h-screen mx-auto">
        <div className="w-full p-6 pt-10 mb-5">
          <h3 className="text-3xl font-bold mb-4">Отправка на рассмотрение</h3>
          <p>
            Перед показом вашего объявления, мы должны убедиться в его
            безопасности. Для этого отправьте заявку на рассмотрение вашего
            объявления. Мы слышали, что это делается при нажатии кнопки
            "Отправить" 🤫
          </p>
        </div>
        <div className="px-6">
          <SendToReviewForm />
        </div>
      </div>
    </>
  );
};

export default SendToReviewView;
