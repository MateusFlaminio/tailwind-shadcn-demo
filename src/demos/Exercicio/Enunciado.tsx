import "./profile.css"

// EXERCÍCIO (ponto de partida): converter para Tailwind e depois usar shadcn.
// 1) Apaga o profile.css e passa tudo para classes Tailwind.
// 2) Troca o <button> e o <input> por <Button> e <Input> do shadcn.
// 3) Bónus: cria uma variant "follow" no Button.
export default function ProfileCard() {
  return (
    <div className="profile">
      <div className="profile__avatar">JK</div>
      <h3 className="profile__name">jeKnowledge</h3>
      <p className="profile__bio">Associação de estudantes de engenharia.</p>
      <input className="profile__input" placeholder="O teu email" />
      <button className="profile__button">Seguir</button>
    </div>
  )
}
