const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  
  // Hàm kiểm tra hợp lệ
  const validRule = ({ name, goals } = {}) => {
    return !!name && !!goals;
  };
  
  // Lọc danh sách cầu thủ hợp lệ
  const validPlayers = players.filter(player => validRule(player));
  
  // Tìm cầu thủ ghi bàn nhiều nhất
  let topScorer = validPlayers.reduce((max, player) => {
    return player.goals > max.goals ? player : max;
  }, { name: '', goals: 0 });
  
  console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
  console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);
  