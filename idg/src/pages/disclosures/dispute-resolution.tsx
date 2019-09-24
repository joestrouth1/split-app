/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

export const DisputeResolutionModal = () => (
  <div
    sx={{
      bg: 'grays.1',
      maxHeight: '100%',
      px: 3,
      py: 4,
    }}
  >
    <article>
      <h1 sx={{ variant: 'type.title', flex: 1 }}>
        Agreements for Resolving Disputes
      </h1>
      {/* TODO: get real policy */}
      <p>
        Doggo ipsum long bois puggo yapper such treat heckin angery woofer, he
        made many woofs length boy. You are doin me a concern puggorino very
        jealous pupper long woofer ruff h*ck, corgo doge dat tungg tho borking
        doggo. Floofs porgo very taste wow smol borking doggo with a long snoot
        for pats, very hand that feed shibe noodle horse. Heckin good boys lotsa
        pats very taste wow smol doge wow very biscit, wow such tempt you are
        doing me the shock borkdrive woofer. Wrinkler super chub waggy wags aqua
        doggo, pats.
      </p>
      <p>
        Clouds wow very biscit boofers pats woofer, boof stop it fren vvv,
        borking doggo thicc porgo. The neighborhood pupper such treat shooberino
        I am bekom fat puggorino very hand that feed shibe boof, super chub
        extremely cuuuuuute smol borking doggo with a long snoot for pats long
        woofer. Very good spot lotsa pats doggo pupperino puggorino heck borking
        doggo long woofer floofs I am bekom fat, doggo borkf woofer wow such
        tempt bork ur givin me a spook long doggo very good spot. Mlem stop it
        fren doggo the neighborhood pupper doggorino, snoot corgo. Mlem heckin
        borkf you are doin me a concern smol shooberino shoob, stop it fren he
        made many woofs heckin wow such tempt you are doing me the shock. Doggo
        aqua doggo h*ck long woofer clouds, boofers shooberino pupperino. Big ol
        pupper long bois pupper, clouds. Clouds pupper maximum borkdrive long
        woofer, heckin good boys wow such tempt.
      </p>
      <p>
        Very taste wow long woofer adorable doggo smol borkdrive wow very
        biscit, such treat much ruin diet borkdrive very jealous pupper. Blop
        borking doggo blop shooberino pupper doggo boofers, boof waggy wags
        puggo sub woofer. Heckin angery woofer puggorino what a nice floof shoob
        aqua doggo shoob, long water shoob pupperino blop. Smol borking doggo
        with a long snoot for pats big ol very taste wow floofs, shoober heckin
        good boys and girls.
      </p>
    </article>
  </div>
)

const DisputeResolutionPage = () => (
  <Layout>
    <SEO title="Dispute Resolution Agreement" />
    <Main>
      <Container sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}>
        <DisputeResolutionModal />
      </Container>
    </Main>
  </Layout>
)

export default DisputeResolutionPage
