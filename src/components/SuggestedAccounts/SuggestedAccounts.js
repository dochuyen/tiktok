import React from 'react'
import classNames from 'classnames/bind'
import styles from './Suggestedaccounts.module.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const cx=classNames.bind(styles)


const users=[
    {
        avt:'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/326198473_941597696827599_3068677457680472381_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=kiepOaD7MkIAX-MjrJ1&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB-OHyEfJtfAdBHRggFGFS9FEAqMfKBm5N1__O9KCZewQ&oe=63F7E601',
        name:'dovanchuyen',
        usename:'chuynnn',
        to:'chuynnn'
    },
    {
        avt:'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/329659337_1135538157126230_4536301337859088081_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NWQm_2ydzKgAX-CaF0M&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBdIMHMF7I0ueIpRpQtQ1eWrNz6Dct-uEElxtATg62jRw&oe=63F6BD4B',
        name:'kieudinhdan',
        usename:'dannn',
        to:'dannn'
    },
    {
        avt:'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/326525849_1249989608919106_2639835925738079898_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mQyetvqpHlcAX9wBWjc&tn=u9TG07mbRzOMg-ZR&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAxtmH1QjgQMEWa4er6RV3ECJgqqYWhUC3eI7WFDXwHgw&oe=63F7AD10',
        name:'bachquanghung',
        usename:'hungbach',
        to:'hungbach'
    },
]

const SuggestedAccounts = (data) => {
  return (
    <>
    {users.map(user=>(
        <Link to={`/profile/@${user.to}`} className={cx("wrapper")}>
        <img className={cx("avatar")} src={user.avt} alt={user.name}/>
          <div className={cx("info")}>
              <h4 className={cx("name")}>
                  <span>{user.name}</span>
                  <BsFillCheckCircleFill className={cx("check")} />
              </h4>
              <span className={cx("usename")}>{user.usename}</span>
          </div>
      </Link>
    ))}
    </>
  )
}

export default SuggestedAccounts
