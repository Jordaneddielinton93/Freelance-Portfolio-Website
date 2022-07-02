const unSplash = async (req, res) => {

  let response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH}`)

  let data = await response.json()
  res.status(200).json({ name: data[Math.floor(Math.random() * 8) + 1] })
}

export default unSplash;

// accessKey
// rI1jjxNbYiJn2GINSQNujhjjLaPQePNMOb-l2s6Nlps


// secret
// uVRhs0UUaJEUUzksrQ5OYvtDoa9o-i06jWybgNN0DPQ