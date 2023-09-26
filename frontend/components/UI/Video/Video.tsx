// import styles from "./Video.module.css"

function Video({ src }: { src: string }) {
  return (
    <video className="w-full h-auto max-w-full rounded-lg " controls preload="none" poster="/poster_video.png">
      <source src={src} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  )
}

export default Video