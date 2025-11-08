import Image from "next/image"
import Link from "next/link"

const EasyPath2 = () => {
  return (
    <Link
            href="/candidate-dashboard-portal-cards/ye-to-kar-looge-tum"
            className="flex flex-col h-full pixel-borders border-4 border-[#00ff00] bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all overflow-hidden"
          >
            <Image src="/memes/chillguy.png" alt="This is fine meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders"/>
            <div className="p-6 grow">
              <h2 className="text-xl font-semibold text-[#00ff00] mb-2 pixel-font">
                Ye Asan Hai
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-sm">
                Yaha referal milta hai direct job ke liye.
              </p>
            </div>
            <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-[#00ff00]">
              <strong>Updated:</strong> Long ago<br/>
              <strong>Author:</strong> Sapna College<br/>
              <strong>Views:</strong> MacroHard Wali Didi
            </footer>
    </Link>
  )
}

export default EasyPath2