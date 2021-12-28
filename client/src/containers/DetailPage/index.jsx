import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailArticle, Reviews } from "../../components";
import apiArticle from "../../services/api/apiArticle";
import "./styles.scss";

export const DetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    const getDetailArticle = async () => {
      try {
        const res = await apiArticle.getDetailArticle(slug);
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailArticle();
  },[]);
  console.log(typeof article.author)
  return (
    <div className="detail-page">
      <div className="container">
        <div className="row mt-4">
          <div className="col lg-2">
            <div className="detail-page__left">
              <Reviews />
            </div>
          </div>
          <div className="col lg-8">
            <div className="detail-page__center">
              <DetailArticle article={article} />
            </div>
          </div>
          <div className="col lg-2">
            <div className="detail-page__right">
              <h1>{slug}</h1>
              <p>
                I love the early morning quiet of a weekend to myself. I’m a
                single mother. I don’t get a lot of quiet mornings. I have a
                different kind of appreciation for a morning with my children,
                but quiet mornings on my own are savored — especially when it’s
                early enough that it feels like the whole world is still
                sleeping. I’m walking my dog through the morning mist when I
                stop to check the time on my phone and get the message that
                punches through the quiet. Apparently, I’m a total MILF. I know
                that it’s meant to be a compliment, but it misses the mark by a
                million miles. Somehow, it’s worse that the message comes from
                someone I considered a friend rather than an anonymous man on
                the Internet. The morning quiet fell to pieces — or I did. What
                You Should Know About Calling Women MILFs For the uninitiated,
                MILF stands for “Moms I’d Like to Fuck”. It’s a pretty direct
                indicator of the type of interest being expressed. It also
                manages to take our humanity out of the equation entirely by
                referring to us by our relationship to other people. For those
                who use it, here’s what you should probably know. Yes, we know.
                Let’s just clear something up. Most women know that there are
                men out there who consider us fuckable. We learn that early — so
                early in fact, that the first time we realize it, most of us
                aren’t even women yet. We’re just girls, still playing with
                Barbie and looking at the world through guileless eyes. I was
                probably twelve the first time I was objectified. The worst part
                is that I was a little flattered by it. I was a shy child, used
                to being the wallflower. The attention felt a little like
                someone was seeing me. Only I knew that there was something
                wrong with how they were seeing me, even if I didn’t yet
                understand what it meant. It’s not a compliment. So, no, I don’t
                find it flattering when someone points out that they’d like to
                fuck me. I know there are people who would. I don’t need a
                hundred people who want to fuck me — just one right person who
                wants to hold me. Is that really too much to ask? There’s not a
                dad equivalent. I’ve never heard women talk about a man who
                happens to be a father as a DILF. It’s not really a prevalent
                thing. I know some women also objectify men. I’m aware. But the
                vast majority of us are capable of feeling sexual attraction for
                a man who happens to be a father without sliding into their DMs
                to point out that they are parents who are also fuckable. “MILF”
                used as anything other than a joke communicates misogyny, not
                flirtation. If your objective was sex, you failed. I don’t have
                an issue talking about sex, thinking about it, or having it.
                Like many single people in a pandemic, I’d like to be having
                more of it. I’m lonely sometimes, and I have the same human
                needs — likely amplified by a high sex drive with little chance
                of satisfying it with another person at this particular point in
                time (see: single parent, pandemic, men sending messages like
                this). But I certainly won’t be having any of it with someone
                who puts sex first and my humanity later. This shouldn’t be hard
                to understand, and yet, this message was a familiar one. It’s
                not the first time I’ve been called a MILF, and it’s certainly
                not the first time I’ve been sexually objectified. It happens
                with strangers, with friends, and even in relationships. I’m
                tired. It took a quiet, beautiful morning and punched a hole
                directly through it. There are countless ways to communicate
                interest to another human being without making them feel like an
                object to be used rather than a person to be cared about or
                loved. That’s what we all want, isn’t it? To be seen, to be
                known, to be loved. I want to share my life with someone who
                wants to fuck me but also wants to love me. We are more than the
                sum of our parts, and we all deserve to have a little affection
                and humanity served up with sexuality and attraction. But what
                about women who don’t mind it? Just because women sometimes
                participate in their own oppression doesn’t mean we should
                endorse it. After all, there are many people who are perfectly
                fine with toxic relationships. This shouldn’t set the standard
                for the rest of us. There are women who have taken their power
                back by reclaiming the term MILF, much in the way many have
                reclaimed “bitch”. I understand the desire to do so, and I don’t
                have a problem with it. I do, however, have a problem with just
                how prevalent this term is used in society without first
                establishing that it’s acceptable — or questioning if it should
                be. I used to love those Laura Numeroff books. If You Give a
                Mouse a Cookie was a personal favorite. It went something like
                “If you give a mouse a cookie, he’s going to ask for a glass of
                milk.” The entire book is about cause and effect. I was thinking
                about it today when the smoke cleared after the message landed,
                and I wasn’t feeling that sense of shame that seems to accompany
                sexually degrading messages, the sadness of seeing a fellow
                human being in a new and unflattering light, and the anger that
                this keeps happening. It’s just cause and effect. If you call a
                mom a MILF, she’s going to block you on social media. If she
                blocks you on social media, she’s probably going to tell a few
                friends about what happened. When she tells a few friends what
                happened, she’s going to need a glass of wine. When she gets a
                glass of wine, she’s going to remember that she needs chocolate
                to go with it. And so on. So, if the point of calling a mom a
                MILF is to
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
