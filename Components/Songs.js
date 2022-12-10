const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Aisa Kyun",
      artist: "Rekha Baradwaj",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FAise%20Kyun.mp3?alt=media&token=06b7c69d-d1a2-4330-83ce-1d7fa9ada32d",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FAise%20kyun.jpg?alt=media&token=d23030d4-507b-47ee-83d3-3d15051d5883",
    },
    {
      id: 2,
      favourite: false,
      songName: "Shinunga e-wa",
      artist: "Fuji Kaze",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2Fshinunoga-e-wa.mp3?alt=media&token=31cac870-c890-4347-94d8-5b1ab20a1731",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2Fshinunoga-e-wa.jpg?alt=media&token=da812d40-efe0-472a-8b1d-2499bca528da",
    },
    {
      id: 3,
      favourite: false,
      songName: "SOLO",
      artist: "Jennie",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FJENNIE%20-%20SOLO.mp3?alt=media&token=e244ae71-3c1e-46ce-8ea9-52d1c5a54cd8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2Fsolo.jpg?alt=media&token=315fbf2a-0f36-4687-afa7-607140c26eff"},
    {
      id: 4,
      favourite: false,
      songName: "Permission To Dance",
      artist: "BTS",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FPermission-to-Dance.mp3?alt=media&token=98244741-76dd-4777-b7c8-2b20a426de22",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FPermission%20to%20dance.jpg?alt=media&token=1b8865e7-a427-411d-a3e6-5d8ac7302f07",
    },
    {
      id: 5,
      favourite: false,
      songName: "jabalakadi jaru mitaya",
      artist: "jambalakadi",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FJamba%20Lakadi%20Jaru%20Mitaya.mp3?alt=media&token=7a9af217-698e-4111-84dd-1da383f71ee8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FJamba%20Lakadi%20Jaru%20Mitaya.jpg?alt=media&token=a807595d-2858-4ee1-b5d4-05d7c7d3abd4",
    },
    {
      id: 6,
      songName: "newyork nagaram",
      artist: "AR Rehman",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2F%5BiSongs.info%5D%2003%20-%20Newyork%20Nagaram.mp3?alt=media&token=95fd4e0e-ceef-4133-945d-6e530d70bb7e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FNew%20York.jpeg?alt=media&token=4320fbd2-833d-4d91-acca-965a19c107ff",
    },
    {
      id: 7,
      favourite: false,
      songName: "Malli rava",
      artist: "Shreya",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2F%5BiSongs.info%5D%2007%20-%20MalliRaava%20(Reprise).mp3?alt=media&token=2584db1f-1bc0-440c-bf1c-0604d0ef5f1c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FMalli%20Rava.jpeg?alt=media&token=c2fc6ab1-7434-4310-8597-ef55f90d7336",
    },
    {
      id: 8,
      favourite: false,
      songName: "your body on my body",
      artist: "Four More Shots Please",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FYour%20Body%20On%20My%20Body.mp3?alt=media&token=46acbd6d-e5ee-4cc0-842e-aa93b7e6f704",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FYour%20Body%20On%20My%20Body.jpg?alt=media&token=cb413294-2321-4bd7-87a2-771910d0d097",
    },
    {
      id: 9,
      favourite: false,
      songName: "life Goes On",
      artist: "BTS",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FLife-Goes-On_BTS.mp3?alt=media&token=c6bdc419-cdf7-48f6-893d-df1c8ec6a991",
      imgSrc:
"https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2Fbtsimage.jpg?alt=media&token=4870dc70-fee3-42d4-8838-9f975c448864"    },
    {
      id: 10,
      favourite: true,
      songName: "Cvrtoon Plevne - Turkish Theme.mp3",
      artist: "Turkey Band",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Ringtones%2FCvrtoon%20Plevne%20-%20Turkish%20Theme.mp3?alt=media&token=6297a8e7-e8b4-4ac1-a325-528d661430ec",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-24244.appspot.com/o/Images%2FcvrtoonImage.jpg?alt=media&token=54a45dbd-0c3a-4f16-bf92-003ef8781fb2",
    },
  ];
  
  export { Songs };