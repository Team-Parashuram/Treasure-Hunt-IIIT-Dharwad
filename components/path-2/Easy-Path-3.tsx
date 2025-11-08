import Image from "next/image"
import Link from "next/link"

const EasyPath3 = () => {
  return (
<Link
            href="/candidate-dashboard-portal-cards/ye-nahi-kar-paaoge-tum"
            className="flex flex-col h-full pixel-borders border-4 border-[#ff8c00] bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] dark:border-[#ff8c00] pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all overflow-hidden"
          >
            <Image src="/memes/iit_dholakpur.png" alt="This is fine meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders"/>
            <div className="p-6 grow">
              <h2 className="text-xl font-semibold text-black dark:text-[#ffd700] mb-2 pixel-font">
                Ye Asan Nahi Hai
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-sm">
                Yaha &apos;we will connect with you soon&apos; milta hai.
              </p>
            </div>
            <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-black dark:border-[#ff8c00]">
              <strong>Updated:</strong>Before ChatGPT<br/>
              <strong>Author:</strong>Alakh Daddy<br/>
              <strong>Views:</strong>Bot Views
            </footer>
    </Link>
  )
}

export default EasyPath3