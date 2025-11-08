import Image from "next/image"
import Link from "next/link"

const EasyPath2 = () => {
  return (
    <Link
            href="/candidate-dashboard-portal-cards/ye-to-kar-looge-tum"
            className="flex flex-col h-full pixel-borders border-4 border-[#00ff00] bg-[#fffacd] hover:bg-[#fff5b8] dark:bg-[#1a1a1a] pixel-shadow-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all overflow-hidden pixel-corners group"
          >
            <Image src="/memes/chillguy.png" alt="This is fine meme" width={400} height={200} className="w-full h-48 object-cover pixel-borders border-b-4 border-[#00ff00] group-hover:brightness-110 transition-all"/>
            <div className="p-6 grow">
              <h2 className="text-xl font-semibold text-[#00ff00] mb-2 pixel-font pixel-text-shadow">
                Ye Asan Hai
              </h2>
              <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                Yaha referal milta hai direct job ke liye.
              </p>
            </div>
            <footer className="p-6 pt-2 text-xs text-gray-600 dark:text-gray-400 pixel-borders border-t-4 border-[#00ff00] bg-black/5 dark:bg-white/5">
              <strong className="pixel-font">Updated:</strong> <span className="pixel-font">Long ago</span><br/>
              <strong className="pixel-font">Author:</strong> <span className="pixel-font">Sapna College</span><br/>
              <strong className="pixel-font">Views:</strong> <span className="pixel-font">MacroHard Wali Didi</span>
            </footer>
    </Link>
  )
}

export default EasyPath2